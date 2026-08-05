const stats = [
{ label: "Models Deployed", value: "150", suffix: "+" },
{ label: "Data Processed (TB)", value: "500", suffix: "+" },
{ label: "ROI Achieved", value: "300", suffix: "%" },
{ label: "Enterprise Clients", value: "40", suffix: "+" }];


export function CompanyStatistics() {
  return (
    <section>
      <div>
        <div>
          {stats.map((stat, index) =>
          <div
            key={stat.label}>

            
              <div>
                {stat.value}<span>{stat.suffix}</span>
              </div>
              <span>
                {stat.label}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>);

}