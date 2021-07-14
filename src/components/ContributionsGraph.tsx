import { ResponsiveLine } from '@nivo/line'
import { formatDateRange } from '../utils/formatDateRange'

const ContributionsGraph = ({ data }) => {
  const a = data.map((b) => ({
    id: b.id,
    data: b.data.map((m) => ({ x: new Date(m.x), y: m.y })),
  }))
  const gridValues = data[0].data.map((m) => new Date(m.x))
  return (
    <ResponsiveLine
      data={a}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'time', format: 'native' }}
      yScale={{
        type: 'linear',
        min: 0,
        max: 'auto',
        stacked: false,
        reverse: false,
      }}
      curve="linear"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        legend: '',
        legendOffset: 36,
        legendPosition: 'middle',
        format: '%b %-d',
        tickValues: 'every 2 week',
        // format: value => formatDateRange(value.toString())
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Pull request count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'category10' }}
      lineWidth={3}
      pointSize={10}
      gridXValues={gridValues}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      pointLabelYOffset={-12}
      enableArea={true}
      areaBlendMode={'hard-light'}
      enablePointLabel={true}
      // useMesh={true}
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 300,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  )
}

export default ContributionsGraph
