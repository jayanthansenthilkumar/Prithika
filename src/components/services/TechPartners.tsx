const partners = [
{ name: "NVIDIA", tier: "Elite Compute Partner" },
{ name: "AWS", tier: "Advanced Technology Partner" },
{ name: "Microsoft", tier: "Gold Partner" },
{ name: "Hugging Face", tier: "Inference Partner" }];


export function TechPartners() {
  return (
    <section>
      <div>
        
        <div>
          <h2>Technology Ecosystem</h2>
          <p>
            We partner with the best in the industry to deliver uncompromised performance.
          </p>
        </div>

        <div>
          {partners.map((partner, index) =>
          <div key={index}>
              <span>{partner.name}</span>
              <span>{partner.tier}</span>
            </div>
          )}
        </div>

      </div>
    </section>);

}