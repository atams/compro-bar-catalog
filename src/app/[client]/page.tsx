import { notFound } from "next/navigation";
import { getClientConfig, clients } from "@/config/clients";
import { ClientProvider } from "@/context/ClientContext";
import HomeView from "@/components/views/HomeView";

export async function generateStaticParams() {
   return Object.keys(clients).map((client) => ({
      client: client,
   }));
}

export default async function ClientPage({ params }: { params: Promise<{ client: string }> }) {
   const { client } = await params;
   const config = getClientConfig(client);

   // If slug is invalid, showing 404 is standard, but getClientConfig falls back to default.
   // We might want to 404 if strictly forcing valid clients.
   // For now let's strict check:
   if (!clients[client]) {
      notFound();
   }

   return (
      <ClientProvider config={config}>
         <HomeView />
      </ClientProvider>
   );
}
