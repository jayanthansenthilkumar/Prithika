import { MapPin } from "lucide-react";

const offices = [
{
  city: "Mumbai, India",
  type: "Headquarters",
  address: "Mumbai, Maharashtra, India"
},
{
  city: "Adelaide, Australia",
  type: "Aussie Hub",
  address: "Adelaide, South Australia"
},
{
  city: "Karur, India",
  type: "Engineering Hub",
  address: "Karur, Tamil Nadu, India"
}];


export function Offices() {
  return (
    <section>
      <div>
        
        <div>
          <div>
            <h2>Global Presence</h2>
            <p>
              We operate globally to attract top talent and stay close to our enterprise clients.
            </p>
          </div>
        </div>

        <div>
          {offices.map((office, index) =>
          <div key={index}>
              <div>
                <MapPin />
                <h3>{office.city}</h3>
              </div>
              <p>{office.type}</p>
              
              <div>
                <p>
                  {office.address}
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>);

}