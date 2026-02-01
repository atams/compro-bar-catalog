import HomeView from '@/components/views/HomeView';
import { ClientProvider } from '@/context/ClientContext';
import { defaultClient } from '@/config/clients';

export default function Home() {
  return (
    <ClientProvider config={defaultClient}>
      <HomeView />
    </ClientProvider>
  );
}
