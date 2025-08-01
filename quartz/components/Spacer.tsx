import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

/**
 * Adds vertical spacing between elements.
 * @param props.displayClass - CSS class for spacer
 */
function Spacer({ displayClass }: QuartzComponentProps) {
  return <div class={classNames(displayClass, "spacer")}></div>
}

export default (() => Spacer) satisfies QuartzComponentConstructor
