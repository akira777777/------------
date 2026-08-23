let meta = #{
    name: "fixart-preview",
    description: "Run FixArt unit tests and deploy a Vercel preview",
    when_to_use: "After FixArt code/price/copy changes when you want a preview URL",
    phases: [
        #{ title: "Test", detail: "npm run test:unit" },
        #{ title: "Deploy", detail: "vercel deploy preview" },
    ],
};

let result_schema = #{
    "type": "object",
    "required": ["tests_ok", "preview_url", "inspect_url", "notes"],
    "properties": #{
        "tests_ok": #{ "type": "boolean" },
        "preview_url": #{ "type": "string" },
        "inspect_url": #{ "type": "string" },
        "notes": #{ "type": "string" },
    },
};

phase("Test");
let t = agent(
    "In the FixArt app directory (cwd should already be the fixart repo), run `npm run test:unit`. "
        + "If tests fail, stop and report failures. Do not deploy on failure.",
    #{ label: "fixart-tests", capability_mode: "execute" },
);

if t == () || t.success != true {
    complete(#{ tests_ok: false, preview_url: "", inspect_url: "", notes: "Unit tests did not succeed; deploy skipped." });
}

phase("Deploy");
let d = agent(
    "From the FixArt app root, run: vercel deploy -y --no-wait --scope akirtas-projects. "
        + "Then poll `vercel inspect <url> --scope akirtas-projects` until Ready or Error (max ~2 minutes). "
        + "Return JSON: tests_ok true, preview_url, inspect_url, notes. Do NOT deploy --prod. "
        + "Test phase result: " + json_encode(t),
    #{ label: "fixart-preview-deploy", capability_mode: "execute", output_schema: result_schema },
);

if d != () && d.success && d.output != () {
    complete(d.output);
}
complete(#{ tests_ok: true, preview_url: "", inspect_url: "", notes: "Deploy step finished without structured output." });
