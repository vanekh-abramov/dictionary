interface IPhonetics {
  sourceUrl: string,
  text: string,
  audio: string
}

interface IDefinitions {
  definition: string,
  example: string,
  synonyms: string[],
  antonyms: string[]
}

interface IMeanings {
  partOfSpeech: string,
  definitions: IDefinitions[],
  synonyms: string[],
  antonyms: string[]
}

interface ILicense {
  name: string
  url: string
}

export interface IWord {
  word: string,
  phonetic: string,
  phonetics: IPhonetics[],
  origin: string,
  meanings: IMeanings[],
  license: ILicense
  sourceUrls: string[]
}
