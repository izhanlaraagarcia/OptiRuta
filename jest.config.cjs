module.exports = {
  // setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",  // Usa babel-jest para transformar archivos JS y JSX
    "^.+\\.tsx?$": "ts-jest"      // Usa ts-jest para TypeScript si lo necesitas
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/__mocks__/fileMock.js",  // Para manejar imágenes en las pruebas
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"  // Para manejar archivos CSS
  },
  transformIgnorePatterns: [
    "/node_modules/(?!firebase)"  // Asegúrate de no ignorar módulos como Firebase que pueden necesitar transformación
  ]
};
