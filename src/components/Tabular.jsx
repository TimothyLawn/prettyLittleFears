
export default function Tabular() {
    return (
        <table>
    <caption>Monthly Sales Report</caption>
    <thead>
      <tr>
        <th scope="col">Month</th>
        <th scope="col">Product</th>
        <th scope="col">Units Sold</th>
        <th scope="col">Monthly ($)</th>
        <th scope="col">yearly Revenue ($)</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>January</td>
            <td>Widget A</td>
            <td>100</td>
            <td>2000</td>
            <td>30000</td>
        </tr>
        <tr>
            <td>February</td>
            <td>Widget B</td>
            <td>75</td>
            <td>1500</td>
            <td>30000</td>    
        </tr>
        <tr>
        <td>January</td>
        <td>Widget A</td>
        <td>120</td>
        <td>2400</td>
        <td>30000</td>
      </tr>
      <tr>
        <td>February</td>
        <td>Widget B</td>
        <td>85</td>
        <td>1700</td>
        <td>30000</td>
      </tr>
      <tr>
        <td>March</td>
        <td>Widget A</td>
        <td>150</td>
        <td>3000</td>
        <td>30000</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="3" scope="row">Total Revenue</th>
        <td>7100</td>
      </tr>
    </tfoot>
  </table>
    )
}