import Popover from "./widgets/widget";
import Option from "./widgets/option";
import Three from "./widgets/three";

document.addEventListener("DOMContentLoaded", () => {
  const popover = new Popover(document.querySelector(".bd-example"));
  const option = new Option(document.querySelector(".bd-example"))

  const three = new Three()
  three.three()

  popover.function_textarea()
  popover.select_model()
  popover.function_chart()
  popover.popover()
});
