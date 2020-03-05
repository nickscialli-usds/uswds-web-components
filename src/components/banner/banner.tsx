import { Prop, Component, h, getAssetPath, State } from "@stencil/core";

@Component({
  tag: "usa-banner",
  styleUrl: "../../../uswds/src/stylesheets/packages/_usa-banner.scss"
})
export class Banner {
  @State() open?: boolean;
  @Prop() tld?: "mil" | "gov";

  toggleOpen() {
    this.open = !this.open;
  }

  render() {
    const tld = this.tld ? this.tld : "gov";
    const open = this.open ? this.open : false;
    return (
      <section class="usa-banner" aria-label="Official government website">
        <div class="usa-accordion">
          <header class="usa-banner__header">
            <div class="usa-banner__inner">
              <div class="grid-col-auto">
                <img
                  class="usa-banner__header-flag"
                  src={getAssetPath("./img/us_flag_small.png")}
                  alt="U.S. flag"
                />
              </div>
              <div class="grid-col-fill tablet:grid-col-auto">
                <p class="usa-banner__header-text">
                  An official website of the United States government
                </p>
                <p class="usa-banner__header-action" aria-hidden={open}>
                  Here’s how you know
                </p>
              </div>
              <button
                class="usa-accordion__button usa-banner__button"
                aria-expanded={`${open}`}
                aria-controls="gov-banner-demo"
                onClick={() => {
                  this.toggleOpen();
                }}
              >
                <span class="usa-banner__button-text">Here’s how you know</span>
              </button>
            </div>
          </header>
          <div
            class="usa-banner__content usa-accordion__content"
            id="gov-banner-demo"
            aria-hidden={!open}
            hidden={!open}
          >
            <div class="grid-row grid-gap-lg">
              <div class="usa-banner__guidance tablet:grid-col-6">
                <img
                  class="usa-banner__icon usa-media-block__img"
                  src={getAssetPath("./img/icon-dot-gov.svg")}
                  alt="Dot gov"
                />
                <div class="usa-media-block__body">
                  <p>
                    <strong>The .{tld} means it’s official.</strong>
                    <br />
                    Federal government websites often end in .gov or .mil.
                    Before sharing sensitive information, make sure you’re on a
                    federal government site.
                  </p>
                </div>
              </div>
              <div class="usa-banner__guidance tablet:grid-col-6">
                <img
                  class="usa-banner__icon usa-media-block__img"
                  src={getAssetPath("./img/icon-https.svg")}
                  alt="Https"
                />
                <div class="usa-media-block__body">
                  <p>
                    <strong>The site is secure.</strong>
                    <br />
                    The <strong>https://</strong> ensures that you are
                    connecting to the official website and that any information
                    you provide is encrypted and transmitted securely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
