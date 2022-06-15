



function CountriesStats(props){

    return(

        <div>

            <table>
                <tr>
                    <td>Country name</td>

                    <td>Active cases</td>

                </tr>

                {props.countries.map((country)=>(
                    <tr>
                        <td>{country.Country}</td>
                        <td>{country.TotalConfirmed}</td>
                        <td>{country.NewConfirmed}</td>
                    </tr>
                ))}
            </table>

        </div>
    )
}

export default CountriesStats;