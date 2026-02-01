import EventsView from "@/components/views/EventsView";
import { ClientProvider } from "@/context/ClientContext";
import { defaultClient } from "@/config/clients";

export default function EventsPage() {
   return (
      <ClientProvider config={defaultClient}>
         <EventsView />
      </ClientProvider>
   );
}
