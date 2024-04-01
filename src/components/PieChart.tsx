import { Card, DonutChart, Title } from '@tremor/react'
import totalSalesByCountry from '../data/total-sales.json'
import totalCustomers from '../data/total-customers.json'
import totalSalesByCategory from '../data/total-sales-by-category.json'

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat('us').format(number).toString()}`

const numberFormatter = (number: number) => new Intl.NumberFormat('us').format(number).toString()

export function PieChart() {
  return (
    <>
      <Card className="w-full md:min-w-[300px] px-10">
        <Title>Total sales</Title>
        <DonutChart
          className="mt-6"
          data={totalSalesByCountry}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber', 'green']}
        />
      </Card>
      <Card className="w-full md:min-w-[300px]">
        <Title>Total customers by country</Title>
        <DonutChart
          className="mt-6"
          data={totalCustomers}
          category="number"
          index="name"
          valueFormatter={numberFormatter}
          colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
        />
      </Card>
      <Card className="w-full md:min-w-[300px]">
        <Title>Sales categories</Title>
        <DonutChart
          className="mt-6"
          data={totalSalesByCategory}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber', 'green']}
        />
      </Card>
    </>
  )
}
