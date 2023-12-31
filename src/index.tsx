// React ve diğer bağımlılıkları içe aktarın
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
// eslint-disable-next-line import/order
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
// eslint-disable-next-line import/order
import { Routes } from "routes";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";

import Navbar from "components/navbar";
import Footer from "components/footer";

import "../src/components/style.css";
// React uygulamasını oluşturmak için bir kök (root) oluşturun
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// React Query istemcisi oluşturun
const client = new QueryClient();

// Kök öğeyi render et
root.render(
  <BrowserRouter>
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <QueryClientProvider client={client}>
        <MantineProvider>
          {/* Auth bileşeni içindeki alt bileşenleri oluşturun */}

          <>
            {/* Sağ üst köşede bildirimleri göstermek için bir bildirim bileşeni ekleyin */}
            <Notifications position="top-right" />

            {/* Sayfa üstündeki gezinme çubuğunu oluşturun */}
            <Navbar />

            {/* Sayfa içeriğini ve rotaları oluşturun */}
            <Routes />
            <Footer />
          </>
        </MantineProvider>
      </QueryClientProvider>
    </QueryParamProvider>
  </BrowserRouter>
);
