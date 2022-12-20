import "./ContactForm.css";
import "./nicepagefb48.css";

const ContactForm = () => {
  return (
    <section class="u-clearfix u-section-2" id="sec-6a39">
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-align-center u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                <div class="u-container-layout u-valign-top u-container-layout-1">
                  <h3 class="u-text u-text-default u-text-1">Contact Us</h3>
                  <div class="u-expanded-width u-form u-form-1">
                    <form action="http://publish.nicepage.com/Form/Process" method="POST" class="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form" style={{ padding: 0 }} source="email" name="form">
                      <input type="hidden" id="siteId" name="siteId" value="1323476" />
                      <input type="hidden" id="pageId" name="pageId" value="1687508" />
                      <div class="u-form-group u-form-name">
                        <label for="name-daf4" class="u-label">Name</label>
                        <input type="text" placeholder="Enter your Name" id="name-daf4" name="name" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required />
                      </div>
                      <div class="u-form-email u-form-group">
                        <label for="email-daf4" class="u-label">Email</label>
                        <input type="email" placeholder="Enter a valid email address" id="email-daf4" name="email" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required />
                      </div>
                      <div class="u-form-group u-form-message">
                        <label for="message-daf4" class="u-label">Message</label>
                        <textarea placeholder="" rows="4" cols="50" id="message-daf4" name="message" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""></textarea>
                      </div>
                      <div class="u-form-agree u-form-group u-form-group-4">
                        <input type="checkbox" id="agree-f183" name="agree" class="u-agree-checkbox" required />
                        <label for="agree-f183" class="u-label">I accept the <a href="#">Terms of Service</a>
                        </label>
                      </div>
                      <div class="u-align-left u-form-group u-form-submit">
                        <a href="#" class="u-active-palette-1-light-2 u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-12 u-btn-1">Submit</a>
                        <input type="submit" value="submit" class="u-form-control-hidden" />
                      </div>
                      <div class="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                      <div class="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                      <input type="hidden" value="" name="recaptchaResponse" />
                    </form>
                  </div>
                </div>
              </div>
              <div class="u-container-style u-image u-layout-cell u-radius-20 u-size-30 u-image-1" data-animation-name="fadeIn" data-animation-duration="1500" data-animation-direction="Right" data-animation-delay="500" data-image-width="900" data-image-height="805">
                <div class="u-container-layout u-container-layout-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="u-expanded-width u-list u-list-1">
          <div class="u-repeater u-repeater-1">
            <div class="u-align-left u-container-style u-list-item u-palette-2-base u-radius-20 u-repeater-item u-shape-round u-list-item-1" data-animation-name="bounceIn" data-animation-duration="1500" data-animation-direction="Right" data-animation-delay="500">
              <div class="u-container-layout u-similar-container u-container-layout-3">
                <h5 class="u-text u-text-2"><span class="u-file-icon u-icon u-text-white"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABIZJREFUeF7t3eGu2yAMhuHl/i+6UyPlKE3SYsAG27z7MU0aI4XvqSGk69n+Kf96vV4vSZfbtm2SdrSxnQG1EKTBX4cDBNuAS72rAGgN//zigFCKyubvuwFohH8MDQQ2If/qtQuAZvggGB/++4rNACzCB8F4BE0ALMMHwVgE1QBGhA+CcQiqAIwMHwRjEIgBzAgfBPYIRABmhg8CWwRFAB7CB4Edgp8APIUPAhsEXwF4DB8E+ggeAXgOHwS6CG4AIoQPAj0EHwAihQ8CHQR/ACKGD4J+BCkA7E+1+IRRk4YdQOR3/3nUIKg3kAoAlQAA+wxQCeQQtizl/zpkEMgQAEA2T2lbpQXAUiAzCwDZPKVtBYC00coGlhoAy0AZAQDKc5S6BQBSx1seHADKc5S6BQBSx1seHADKc5S6RWoAHAeX7QKgPEepWwAgdbzlwaX7PMAxZMp/Ofz9oOz9W7ZHwoQvCz8lAMKXh58OAOHXhf8HIMMyQPj14acAQPBtwf9tlo8/RNsIEnxf8DcAUZYBgtcJPiQAwtcN/2MP4L0CEL5++DcAnhEAYGEAhG8TfpgKAICBALwtA4RvF/5jBQCA7YR76939t4RRAWzJAMB2ft337v6LIqkAtoYAYDu/7nt3/13BVABbQ+4B7LcqfAOYmYIiAA+3hQAwy1/2Q6M8fFYABDYIRBWAKmAz+R56BYCHFCa+BjEAqsDElAwvXQUABIZJTOoaAJMm3stlqwFQBbxEp/M6mgDMRsAtoU74+yFba1ezzwZA0Jrc579rBjC7CnBEDACeESgY6KoAVAGFBCZ30Q0ABJMT7Ly8CgAQdKYw8Z+nARBtU1i6ixp1l6MGwEMViICgFPy1GFhDUAUAgu+1vDb4URDUAYDgjqA3/KNHi2qQFoCX5UArfCsEJgC8VAEPCLQBaI/JDAAIbL+AU2s5MAWwOgKLd/95h6GBYBkAVmvot32/dfha4zEH4KkKaE2a5OBuFIDePcEQAKshGBl+L+phADwi6H33PFWCGeH3IBgKwCsCLQgzw29FMByAZwQ9EDyE34JgCgDvCGoheAq/FsE0ABEQ/JpMj6Ff9ySSc4KpACIhkNz6eWxTQjAdAAjs2fxC4AIACOYhAID93Lu5wlMlcAOAKjDGyRWBKwAgGI/AHYBjCiLcZo2Jy+YqRyVwC4BqYBP89WzDNQAQ2CNwDwAExghsu9frnT2B3lyeewpRAdgY2oT/7jUUAJYDfQjhAIBAF0FIACDQQxAWAAh0EIQGwOawH0EKAFSDdghpAICgDUEqACwJdQjeD4RSAqAayCCkBgCC3whCPA6WOS634jnCfY6WAkA1+ARwXvrT7gGe6gKV4P4zGJcCsPpdgvtPBZdXc70Wq1WDb3d8S1aAM6MVIIT4n0F67+22nrJCKJ31LF8BMleDUvjvsQPgoWBkqAaS8AFQWC2iQpCGDwDhdiEShJrwASAEEOX8oDZ8AFQC8AyhJXwANALwBqE1fAB0AvAAoSd8ACgBmHWW0Bs+AAwAjMCgEfzxOjkIMkagBUIz9PNr+g8mF0B3A7oPWQAAAABJRU5ErkJggg==" alt="" /></span>&nbsp;Call Us
                </h5>
                <p class="u-text u-text-3">1 (234) 567-891,<br />1 (234) 987-654
                </p>
              </div>
            </div>
            <div class="u-align-left u-container-style u-list-item u-palette-2-base u-radius-20 u-repeater-item u-shape-round u-list-item-2" data-animation-name="bounceIn" data-animation-duration="1500" data-animation-direction="Right" data-animation-delay="500">
              <div class="u-container-layout u-similar-container u-container-layout-4">
                <h5 class="u-text u-text-4"><span class="u-file-icon u-icon u-text-white"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABJhJREFUeF7tndF2m0AMROP//2j3OI2b1AGzsBppRjt5DWCkubq74J709tH4536/3yPKu91ut4jrMF6jVWFRgR8F1QkIeQCyQt+DQh0GWQCqg38FQhUEOQDYglcHQQYA9uBVQaAHQC14NRCoAVAP/wkD8/6AFoAu4bNDQAdAt+DZlwQqALqHz2gDGgBWCZ8NAgoAVgufCYJyAFYNnwWCUgBWD58BAgNw9NVfwu8r3xOUAeDp/5+sKghKAHD421qpgCAdAIf/fk3JhsAAJKzxZz6iNQCe/jEUMiFIM4DDHws/+9FwKQBGJ4sB1tF7PYfV76NTAKhs6Gwjle99BI62AMwG/9q8ChCia9gCAg5AduPQTetWTysA0OE/JygTAnRNbQBAN6pqSUDXBQUga1LQTdrbTHWoTx6AqvAzlwNkjdIAIBsz8giVBQGyThgAGXpENoYJgMe9oGqVBQDVkDPB/zwWDTyqXgNwNfGX8wxAYkNQ0zDLAhICVM2SBkA1wwDMduDrfMVJCCr9Q612iAHUmhAV/uM6arUbgMj0DcDfbqpNQSQDarVLGYB185f1RRGifgMQOf7gTbABEPmLnahlwAAYgHBjh18QuQlETABgBYBtghH1GwAAAV4Cgv5K9+a/YiVfBlDho74SljIAqgmREjAAfhEU8n8UZNnPBogcf0H4IQAgnwSYlwE1/X/2MngA/l1OsRmzvVCsWRIARgsgw0fWawBmxx78/v95e4iXQLJLALopZ5lAT7+kAdAbQRYIlMOHGiALAOR0HJkgI3x0fbA9QCYA6CZtgZAVPro2KABdIegSPnwJyAYAPS0d64EboKJpCBAypz5zg9sWgKgmVgQfde9Hm9iUJeB5E5WNvGIEtfsdCXvrmBQDVC0DV5vCcB7qzd9rbWkAGIJxrLLCT10CDIAB+OxA9do6HkPNkZnTn24AA3AMVXsADME+BNnhlxjAABgA7wU2GKiY/jID2AK/CVgOAEPwDUFV+KUGeJa/+mNhZfgG4PipDH7E8gCsvBRUh09hAAMAl8zbD0j9Mujdnay2F2CYfhoDrGgBA7Chg1UswBI+lQFWsoABeLMZ6G4BpvDpDND95RBb+AYg+QnMAJxoeLelgDF8WgN03BAagBPT320vwBo+tQE6WcAAXJj+LhZgDp/eAB0sYAAmpl/dAuzhSxhAFQKF8A1AgJ32LmEAAM1VeTmkEr6UAZQ2hAYAMP0qewGl8OUMoGABAwCcfnYLqIUvaQBmCxiAhOlntYBi+LIGYINANXwDEGQsAxDUyCuXqX45pBy+vAEYNoQG4MrYBp9TZQH18FsYoNICBiB4kmcul22BDuG3MUCFBQzAzLiCzs2yQJfwWxkg0wIGADTBEZdFW6BT+O0MgH5F3C18A3BSOQbgZMMqD49eCjqG39YAiA2hAagc54ufHWWBruG3NkCkBQzAxQlkOG3WAp3Db2+ACAsYAIYxnryHqxboHv4SBrj6cmiF8A3AG7MYgEntMp4+uhSsEv5SBjizITQAjOMbdE9HFlgp/OUMMGIBAxA0acyX2bPAauEvaYC9x8IVw3/04g+DhaSf6cOtvAAAAABJRU5ErkJggg==" alt="" /></span>&nbsp;Location
                </h5>
                <p class="u-text u-text-5">121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
              </div>
            </div>
            <div class="u-align-left u-container-style u-list-item u-palette-2-base u-radius-20 u-repeater-item u-shape-round u-list-item-3" data-animation-name="bounceIn" data-animation-duration="1500" data-animation-direction="Right" data-animation-delay="500">
              <div class="u-container-layout u-similar-container u-container-layout-5">
                <h5 class="u-text u-text-6"><span class="u-file-icon u-icon u-text-white"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABLBJREFUeF7tnduS6yAMBE/+/6NzKsk6F19AAiSEZvY1tsuo24OMk/XtX7K/+/1+txzS7Xa7WR7f+9jLD8YaeA3I6kIsJ8Bs4NmEWEKA6NCvpFghHUILsCr4vRCRRQgpQBbwK4gQSoCs4COLEEIAFPARRZgqACr4SCJMEYDgz+8bZjSL7gIQfnklwVsCNwEIvraE9Pu5lwguAhC+Dv62tYcE5gIQfht8LwnMBCD4PvBedwomAhD+WPiWaTBcAMK3gW8lwVABCN8WvoUEwwQgfB/4oyUYIgDh+8IfKUG3AIQ/B/4oCboEIPy58EdI0CwA4ceA3ysBBYjFsflsWpeNmwTg1d/MyXTHFgnUAhC+KcPug2slUAlA+N18XA6gkQBagK1Q2cQ2ESBTka4KhDDGw1NGSSYhFQZprA/2oikAqShIYxUJgFaQR1GQxlxNAKRibNMh0piLAmQqxDPuhP/cAWncFOCkC6YAyeZB7QOTbAKU0u8yAZCKsA8BpLGfCpCxAMg9QCkBKQBAD6ASIOvVzwR4abC/EzokAAXItRB0WPvf3Qr/CJAZPhPgo8J3ClAAoB7grBegABTgVYHs8c8p4Nf0bRp4JwAF+BQIqRYUAHAK+E5DCkABMOZ/9gBH0x99wDMBEOY8CkABYL8QcjLLvZeFmQCgPcCWiDeU+OcUcJ4DFAA4AZ4XBRPgaABUTaAGC/qt4KsmkAlwURmoiwJqsEyAg/LsAdgE2r5qtTT/eH+G+ssg9gB/FaAAJ8vB7AF4G2j6tm3vmC/GHZtANoESIaFSEWqwTAAmABPgtwJcBwBfDaQAhUhAmB6hBNB8J2DzIrsEFEDQFGSWAE6AlhR47JNVAkgBKMEn9mAFoAQvCaAFoAQU4HUVCFcIv/vFLD0BfAJsUFElgPphSO2OD00CuN8G1gRAmw4owIURKElAAQqRgCDBW4DMK12S2L/aJrMEkP8jqEWGrBJQAIUNGSWgAAoBMt4dHARgH1A3IksSwP6r2Dri+hYZJKAAdc7FLVaX4FIATgNyM1aVAPp9AXK8si1XlKAqAFNABn/Fp4hnwkK9M0iHVr71KkkgFoApIIe/ShJcSQr13kA9Vt0e2iTw/FaRWgCmgA5+SxJ4CVASE+rdwW1I9XtJkyC8AEwBPXxNEngIUJOxmAAUoF2A2gMkD/i1c3h+Lhmi18lKzmXFbfZXoVc9a1c/BVjRJsU5DxOAU4Gi6kE2lcAXJ8A2Jq/oClLDZU9DCp8CLIu4fOJmAnAqiG+MBr46ATgVxBZAC79ZACZBPBFa4FOAeBybz8hdAKZAM6vhO7bC70oA9gPDOTYdsAf+EAGYBE3chuzUC3+YAJRgCE/VQUbAHyoAJVDx69p4FPzhAlCCLq6inUfCNxGAEog4Nm00Gr6ZAJSgiW9xJwv4pgLwNnGMBFbgt7MTfSOodyh8jNxWQWv4LgnAJIgL31UAiiATweOq/z4TlylgP3ROCecyeMOfkgDfQ6cIr2rMAO/aBNbCD1WEmeBDCYDWH0QAH1KA7CJEAh9agGwiRAS/hACrixAZ/FICrHTnsAL06esAtbsCzeez7yBWA76v7ZSFIA3glm2tpFgd9lkt/wO/kBxObkZ/8AAAAABJRU5ErkJggg==" alt="" /></span>&nbsp;Hours
                </h5>
                <p class="u-text u-text-7">Mon – Fri …… 11 am – 8 pm, Sat, Sun&nbsp;&nbsp;…… 6 am – 8 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;