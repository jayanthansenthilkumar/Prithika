/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

const companies = [
{ name: 'IBM', src: '/trusted/IBM_logo.svg' },
{ name: 'Google', src: '/trusted/google.webp' },
{ name: 'Meta', src: '/trusted/meta.png' },
{ name: 'Amazon', src: '/trusted/amazon.webp' },
{ name: 'Cloudflare', src: '/trusted/Cloudflare.webp' },
{ name: 'Swiggy', src: '/trusted/swiggy.webp' },
{ name: 'Blinkit', src: '/trusted/Blinkit.webp' },
{ name: 'Vercel', src: '/trusted/vercel.svg' },
{ name: 'Supabase', src: '/trusted/supabase.png' }];


export function TrustedBy() {
  const [activeLogo, setActiveLogo] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleLogoClick = (e: React.MouseEvent, companyName: string) => {
    e.stopPropagation();
    if (activeLogo === companyName) {
      setActiveLogo(null);
      setIsPaused(false);
    } else {
      setActiveLogo(companyName);
      setIsPaused(true);
    }
  };

  const logos =
  <>
      {companies.map((company) =>
    <div
      key={company.name}

      onClick={(e) => handleLogoClick(e, company.name)}>
      
          <img
        src={company.src}
        alt={`${company.name} logo`}

        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }} />
      
        </div>
    )}
    </>;


  return (
    <section

      onClick={() => {
        setActiveLogo(null);
        setIsPaused(false);
      }}>
      
      <div>
        
        <h2>
          Trusted by world-class developers & industry leading teams
        </h2>
        
        <div

          style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
          
          {[...Array(4)].map((_, i) =>
          <div
            key={i}

            aria-hidden={i !== 0}>
            
              {logos}
            </div>
          )}
        </div>
        
      </div>
    </section>);

}