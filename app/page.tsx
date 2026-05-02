import HeroSystem from "../components/HeroSystem";
import TrustMetrics from "../components/TrustMetrics";
import AsymmetricCapabilities from "../components/AsymmetricCapabilities";
import ScrollProtocol from "../components/ScrollProtocol";
import SocialProof from "../components/SocialProof";
import ActionDeployment from "../components/ActionDeployment";

export default function Home() {
  return (
    <main className="bg-[#030303] text-[#F5F5F5] overflow-x-hidden selection:bg-white selection:text-black">
      {/* Global Tactile Noise overlay for material reality */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.02] mix-blend-screen"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />
      <HeroSystem />
      <TrustMetrics />
      <AsymmetricCapabilities />
      <ScrollProtocol />
      <SocialProof />
      <ActionDeployment />
    </main>
  );
}