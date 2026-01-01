export const levels = [
  {
    name: 'none',
    value: 'none',
  },
  {
    name: 'primary',
    value: 'primary',
  },
  {
    name: 'secondary',
    value: 'secondary',
  },
  {
    name: 'tertiary',
    value: 'tertiary',
  },
];

export type Item = {
  name: string;
  value: string;
};

export type SubType = {
  name: string;
  value: string;
  topics: Item[]
}

export type levelId = 'primary' | 'secondary' | 'tertiary';

export const SUBJECT_TOPICS: Record<levelId, SubType[]> = {
  'primary': [
    {
        name: 'test',
        value: 'test',
        topics: []
    },
  ],
  'secondary': [
    {
        name: 'Biology',
        value: 'Biology',
        topics: [
          {
            name: 'Inheritance',
            value: 'Inheritance',
          },
        ]
    },
    {
        name: 'Physics',
        value: 'Physics',
        topics: [

        ]
    },
  ],
  'tertiary': [
    {
        name: 'Physics',
        value: 'Physics',
        topics: [
            {
              name: 'Electric & Magnetic Fields',
              value: 'Electric & Magnetic Fields',
            },
            {
              name: 'Gravitational Fields',
              value: 'Gravitational Fields',
            },
            {
              name: 'Laws of Motion',
              value: 'Laws of Motion',
            },
        ]
    },
    {
        name: 'Biology',
        value: 'Biology',
        topics: [
            { 
              name: 'Inheritance',
              value: 'Inheritance',
            },
            {
              name: 'Proteins',
              value: 'Proteins',
            },
            {
              name: 'Stem Cells',
              value: 'Stem Cells',
            },
        ]
    },
  ]
};

