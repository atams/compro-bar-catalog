import ReserveView from "@/components/views/ReserveView";
import { ClientProvider } from "@/context/ClientContext";
import { defaultClient } from "@/config/clients";

export default function ReservePage() {
   return (
      <ClientProvider config={defaultClient}>
         <ReserveView />
      </ClientProvider>
   );
}
