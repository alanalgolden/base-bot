import { clientBootstrap, RouteModule } from "@impalajs/react/client";
import { verifyPineconeClient } from "./pinecone-client";

const modules = import.meta.glob<RouteModule>("./routes/**/*.{tsx,jsx}");

clientBootstrap(modules);
verifyPineconeClient();
