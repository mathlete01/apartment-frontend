import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';

const NeighborhoodDropdown = ({ neighborhoods, selectedIDs, handleNeighborhoodChange }) => {

    const [show, setShow] = useState(false);

    const idHash = {}
    
    for (const neighborhood in neighborhoods) {
        idHash[neighborhood.id] = false
    }

    const handleDropdownClick = (vis, event, source) => {
        if ( event.target && event.target.tagName !== 'BUTTON' ) return
        show ? setShow(false) : setShow(true)
    }

    // const handleFirstChange = (ID, selectedIDs) => {
    //     if ( selectedIDs.includes( ID ) ) return
    //     console.log('a change happened!')
    //     // handle upstream change for selected neighborhoods
    //     const newArray = [ ID, second, third ]
    //     handleNeighborhoodChange( newArray )
    // }

    // const handleSecondChange = (ID, selectedIDs) => {
    //     if ( selectedIDs.includes( ID ) ) return
    //     console.log('a change happened!')
    //     // handle upstream change for selected neighborhoods
    //     const newArray = [ first, ID, third ]
    //     handleNeighborhoodChange( newArray )
    // }

    // const handleThirdChange = (ID, selectedIDs) => {
    //     if ( selectedIDs.includes( ID ) ) return
    //     console.log('a change happened!')
    //     // handle upstream change for selected neighborhoods
    //     const newArray = [ first, second, ID ]
    //     handleNeighborhoodChange( newArray )
    // }

    // const generateDropdownOptions = () => {
    //     return neighborhoods.map( neighborhood => {
    //         return <Dropdown.Item as='option' key={ neighborhood.id } value={ neighborhood.id } >{ neighborhood.name }</Dropdown.Item>
    //     })
    // }

    const generateNeighborhoodCheckboxes = (neighborhoods) => {
        // {id: 101, name: "pacific heights"}
        return neighborhoods.map( neighborhood => (
            <>
                <input type='checkbox' name={ neighborhood.name } value={ neighborhood.id } checked='true' />
                <label for={ neighborhood.name }>{ neighborhood.name }</label><br/>
            </>
        ))
    }

    return (
        <Dropdown show={ show } onToggle={ handleDropdownClick }>
            <Dropdown.Toggle variant='secondary'>
                filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Header>Neighborhoods</Dropdown.Header>
                <Dropdown.Divider />
                {/* <Dropdown.Item as='select' value={ first } id='first-neighborhood-select' onChange={ (event) => handleFirstChange(parseInt(event.target.value), selectedIDs) }>
                    { generateDropdownOptions() }
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as='select' value={ second } id='second-neighborhood-select' onChange={ (event) => handleSecondChange(parseInt(event.target.value), selectedIDs) }>
                    { generateDropdownOptions() }
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as='select' value={ third } id='third-neighborhood-select' onChange={ (event) => handleThirdChange(parseInt(event.target.value), selectedIDs) }>
                    { generateDropdownOptions() }
                </Dropdown.Item> */}
                <Dropdown.Item id='neighborhoods-dropdown-form' as='form'>
                    { generateNeighborhoodCheckboxes(neighborhoods) }    
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default NeighborhoodDropdown;
