alter table booking_events
  add column if not exists delivery text not null default 'handoff';

create index if not exists booking_events_delivery_created_at_idx
  on booking_events (delivery, created_at desc);
