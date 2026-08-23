create table if not exists booking_events (
  id serial primary key,
  service text not null,
  device_family text not null,
  lang text not null,
  created_at timestamptz not null default now()
);

create index if not exists booking_events_created_at_idx on booking_events (created_at desc);
