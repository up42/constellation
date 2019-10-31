/**
 * Web Font Loader takes care of Vue Design System’s font loading.
 * For full documentation, see: https://github.com/typekit/webfontloader
 */
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: [
      "Source+Code+Pro:400",
      "Source+Sans+Pro:400,400i,700",
      "Roboto+Condensed:700"
    ]
  },
  custom: {
    families: ["Inter", "Inter var:n4,i4,n7"]
  }
});
