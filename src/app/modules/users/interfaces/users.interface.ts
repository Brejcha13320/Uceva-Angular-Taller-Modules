export interface User {
    id: number;
    name: string;
    lastName: string;
    age: number;
    email: string;
    engineering: Engineering;
}

export type Engineering = 'Sistemas' | 'Electronica' | 'Biomedica' | 'Industrial' | 'Ambiental';