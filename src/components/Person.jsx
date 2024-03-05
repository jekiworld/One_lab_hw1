import React, { useState } from 'react';
import styled from "styled-components";

export default function Person({ people, onDelete, onEdit }) {
    const [editedIndex, setEditedIndex] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedSurname, setEditedSurname] = useState('');
    const [editedPhone, setEditedPhone] = useState('');

    const handleEdit = (index, person) => {
        setEditedIndex(index);
        setEditedName(person.name);
        setEditedSurname(person.surname);
        setEditedPhone(person.phone);
    };

    const handleSave = () => {
        const updatedPerson = {
            name: editedName,
            surname: editedSurname,
            phone: editedPhone
        };
        onEdit(editedIndex, updatedPerson);
        setEditedIndex(null);
        setEditedName('');
        setEditedSurname('');
        setEditedPhone('');
    };

    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {people.map((person, index) => (
                    <tr key={index}>
                        <td>
                            {editedIndex === index ? (
                                <input
                                    type="text"
                                    value={editedName}
                                    onChange={(e) => setEditedName(e.target.value)}
                                />
                            ) : person.name}
                        </td>
                        <td>
                            {editedIndex === index ? (
                                <input
                                    type="text"
                                    value={editedSurname}
                                    onChange={(e) => setEditedSurname(e.target.value)}
                                />
                            ) : person.surname}
                        </td>
                        <td>
                            {editedIndex === index ? (
                                <input
                                    type="text"
                                    value={editedPhone}
                                    onChange={(e) => setEditedPhone(e.target.value)}
                                />
                            ) : person.phone}
                        </td>
                        <td>
                            {editedIndex === index ? (
                                <button onClick={handleSave}>Save</button>
                            ) : (
                                <button onClick={() => handleEdit(index, person)}>Edit</button>
                            )}
                            <button onClick={() => onDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    )
}

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 14px;

    th,
    td {
        padding: 8px;
        text-align: center;
        border: 1px solid black;
    }

    th {
        background-color: darkblue;
        color: white;
    }
`;
