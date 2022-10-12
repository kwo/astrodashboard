import '@tremor/react/dist/esm/tremor.css';
import { Card, Title, Text, ColGrid, Col, Block, Metric, Flex, ProgressBar } from '@tremor/react';
import Chart from './Chart.jsx';

const categories = [
    {
        title: 'Sales',
        metric: '$ 12,699',
        percentageValue: 15.9,
        target: '$ 80,000',
    },
    {
        title: 'Profit',
        metric: '$ 45,564',
        percentageValue: 36.5,
        target: '$ 125,000',
    },
    {
        title: 'Customers',
        metric: '1,072',
        percentageValue: 53.6,
        target: '2,000',
    },
];

export default ({title, description}) => (
    <main>
        <Title>{title}</Title>
        <Text>{description}</Text>

        <ColGrid numColsLg={ 6 } gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
            <Col numColSpanLg={ 4 }>
                <Chart />
            </Col>

            <Col numColSpanLg={ 2 }>
                <Block spaceY="space-y-6">
                    { categories.map((item) => (
                    <Card key={ item.title }>
                        <Text>{ item.title }</Text>
                        <Metric>{ item.metric }</Metric>
                        <Flex marginTop="mt-4">
                            <Text truncate={ true }>{ `${item.percentageValue}% (${item.metric})` }</Text>
                            <Text>{ item.target }</Text>
                        </Flex>
                        <ProgressBar percentageValue={ item.percentageValue } marginTop="mt-2" />
                    </Card>
                )) }
                </Block>
            </Col>
        </ColGrid>
    </main>
);
