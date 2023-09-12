import React from 'react';
import logo from './logo.jpg'; // Tell webpack this JS file uses this image

const paniniData = [
    {
        name: 'Panino Salami',
        calories: 942,
        protein: '40g',
        carbs: '73g',
        fat: '53g',
        allergens: ['Gluten', 'Lactate'],
    },
    {
        name: 'Panino Speciale',
        calories: 826,
        protein: '37g',
        carbs: '74g',
        fat: '42g',
        allergens: ['Gluten', 'Lactate', 'Usturoi'],
    },
    {
        name: 'Panino Nuvola Soffice',
        calories: 674,
        protein: '25g',
        carbs: '75g',
        fat: '30g',
        allergens: ['Gluten', 'Lactate', 'Fistic'],
    },
    {
        name: 'Panino Margherita',
        calories: 571,
        protein: '19g',
        carbs: '75g',
        fat: '21g',
        allergens: ['Gluten', 'Lactate'],
    },
    {
        name: 'Panino Favolosa',
        calories: 602,
        protein: '24g',
        carbs: '74g',
        fat: '23g',
        allergens: ['Gluten', 'Lactate'],
    },
    {
        name: 'Panino Cotto',
        calories: 700,
        protein: '25g',
        carbs: '75g',
        fat: '32g',
        allergens: ['Gluten', 'Lactate', 'Usturoi'],
    },
    {
        name: 'Cartofi prăjiți',
        calories: 478,
        protein: '6g',
        carbs: '25.5g',
        fat: '6g',
        allergens: [],
    },
];


const PaniniPage = () => {

    const tableHeaderStyle = {
        color: 'white',
        textAlign: 'center',
        fontSize: '7vw',
    };

    const tableCellStyle = {
        color: '#aac962',
        textAlign: 'center',
        fontSize: '3vw',
    };

    const menuStyle = {
        display: 'grid', // Use flexbox to center content vertically and horizontally
        // justifyContent: 'center', // Center align content horizontally\
        flexDirection: 'row',
        // alignItems: 'center'
    };

    const tableStyle = {
        justifyContent: 'space-between'
    };

    const logoStyle = {
        width: '33vw',
        marginLeft: '33vw',
    }
    return (
        <div style={menuStyle}>
            <img style={logoStyle} src={logo} alt='logo Panino Corner' />
            <h1 style={tableHeaderStyle}>Meniu Panini</h1>
            <table style={tableStyle}>
                <thead>
                    <tr style={tableCellStyle}>
                        <th>Denumire</th>
                        <th>Calorii</th>
                        <th>Protein</th>
                        <th>Carbohidrați</th>
                        <th>Grăsimi</th>
                        <th>Alergeni</th>
                    </tr>
                </thead>
                <tbody style={tableCellStyle}>
                    {paniniData.map((panino, index) => (
                        <tr key={index}>
                            <td>{panino.name}</td>
                            <td>{panino.calories} kcal</td>
                            <td>{panino.protein}</td>
                            <td>{panino.carbs}</td>
                            <td>{panino.fat}</td>
                            <td>{panino.allergens.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* 
            <h1>Allergeni</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sortiment</th>
                        <th>Alergeni</th>
                    </tr>
                </thead>
                <tbody>
                    {allergeniData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.sortiment}</td>
                            <td>{item.alergeni}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div >
    );
};

export default PaniniPage;
