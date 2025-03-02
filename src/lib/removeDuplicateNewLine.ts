/**
 * 刪除重複的換行符號
 * @param text 要處理的文字
 * @returns 處理後的文字
 */
export const removeDuplicateNewLine = (text: string): string => {
  if (!text) return text

  return text
    .replace(/(\r\n\r\n)/gm, `\r\n`)
    .replace(/(\n\n)/gm, `\n`)
    .replace(/(\r\r)/gm, `\r`)
}
