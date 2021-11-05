export const capitalizeEach = (str: string): string =>  {
  const words = str.toLocaleLowerCase().split(' ')
  
  const newWords:string[] = []
  words.forEach((word) => {
    const newWord = word[0].toUpperCase() + word.slice(1)
    newWords.push(newWord)
  })

  return newWords.join(' ')
}