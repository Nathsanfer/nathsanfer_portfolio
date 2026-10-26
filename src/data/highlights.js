// Destaques exibidos na home (certificações, conquistas, reconhecimentos).
// Campos vazios (issuer, date, link, image) são ocultados automaticamente.
//
import certificacao from '../assets/images_destaques/certificacao.jpg'

// Campos vazios (issuer, date, link) são ocultados automaticamente na home.

export const highlights = [
  {
    kind: 'Reconhecimento',
    title: 'Aluno Ouro',
    issuer: 'SENAI São Paulo · Campus Campinas',
    date: 'Agosto de 2026',
    description:
      'Menção por 100% de frequência e nota média 95,4 no 1º semestre de 2026, no curso de Análise e Desenvolvimento de Sistemas.',
    image: certificacao,
    link: null,
  },
]
