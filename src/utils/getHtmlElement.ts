export const getHTMLElement = <T extends HTMLElement = HTMLElement>(
  selector: string,
): T => {
  const element = document.querySelector<T>(selector)
  if (element !== null) return element

  throw `cannot find ${selector} element`
}
