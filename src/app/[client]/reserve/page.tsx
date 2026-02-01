import { notFound } from "next/navigation";
import { getClientConfig, clients } from "@/config/clients";
import { ClientProvider } from "@/context/ClientContext";
import ReserveView from "@/components/views/ReserveView";

export async function generateStaticParams() {
   return Object.keys(clients).map((client) => ({
      client: client,
   }));
}

export default async function ClientReservePage({ params }: { params: Promise<{ client: string }> }) {
   const { client } = await params;
   const config = getClientConfig(client);

   if (!clients[client]) {
      notFound();
   }

   return (
      <ClientProvider config={config}>
         <ReserveView />
      </ClientProvider>
   );
}
