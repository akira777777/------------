import { BookingForm } from "@/components/contact";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { DICTS } from "@/lib/i18n";
import { useBooking, useLang } from "@/lib/store";

export function BookingDialog() {
  const lang = useLang((s) => s.lang);
  const t = DICTS[lang];
  const open = useBooking((s) => s.open);
  const service = useBooking((s) => s.service);
  const setOpen = useBooking((s) => s.setOpen);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle>{t.contact.formTitle}</DialogTitle>
        <DialogDescription className="mt-1">{t.contact.lead}</DialogDescription>
        <div className="mt-6">
          {open ? (
            <BookingForm
              key={service}
              defaultService={service}
              idPrefix="book"
              onDone={() => setOpen(false)}
            />
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
