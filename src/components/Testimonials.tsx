import { testimonials } from "../data";
import { ExternalLink } from "./ExternalLink";
import { PageHeader } from "./PageHeader";

export function Testimonials() {
  return (
    <section className="screen">
      <PageHeader
        title="testimonials"
        description="Verified outcomes and client feedback from automation projects completed through multiple platform."
      />
      <div className="testimonial-list">
        {testimonials.map((item, index) => (
          <article className="testimonial-card" key={index}>
            <div className="testimonial-heading">
              <div>
                <h2>Client&apos;s review</h2>
                <time>{item.date}</time>
              </div>
              <ExternalLink href={item.href}>Proof on Upwork ↗</ExternalLink>
            </div>
            <div
              className="testimonial-rating"
              aria-label={`${item.rating} out of 5 stars`}
            >
              <span aria-hidden="true">★★★★★</span>
              <strong>{item.rating}</strong>
            </div>
            {item.quote && <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>}
            {item.endorsements && (
              <>
                <p>Endorsed by client</p>
                <div className="endorsement-list">
                  {item.endorsements.map((endorsement) => (
                    <span key={endorsement}>{endorsement}</span>
                  ))}
                </div>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
