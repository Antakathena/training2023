**in app-main.scss:**
// add:

button {
    position: absolute;
    left: 600px;
    top: 10px;
    height: 20px;
    width: 100px;
}

**in app-main.tsx**

import { CHANNEL_CONNECTOR_SERVICE, IChannelConnector } from '~src/services/channel-connector'; // at the top top
import { setTitle, uuidv4 } from '@alk/core'; // uuidv4 added

    @lazyInject(CHANNEL_CONNECTOR_SERVICE) private readonly channelConnector: IChannelConnector;

        private readonly onTestButtonClick = async () => {
        const channel = await this.channelConnector.getChannel();
        const sseId = uuidv4();
        const payload = {
            name: 'aWindowName',
            topic: 'pre-deal-limit-check',
            data: {

                dealType: 'BondDeals',

                action: 'showPDC',

                sseId,

            },
        };
        console.log('************************* will dispatch to pre-deal-limit-check TOPIC, with sseId ', sseId);
        channel.dispatch('pre-deal-limit-check', payload);

    };

    render(): JSX.Element {
        return (
            <Host><pdc-credit-limit-table /></Host>
            <Host><pdc-credit-limit-table />
                <button value="test" onClick={ this.onTestButtonClick } />
            </Host>
        );

**in pdc-credi-limit-table.tsx**
import { creditLimitLimitsResourceToGridData } from '~src/helpers/credit-limit-grid.utils';
import { SSEEventMock } from '~src/services/sse-event';

    private readonly onTestButtonClick = async () => {
        console.log('2nd button clicked');
        const result = creditLimitLimitsResourceToGridData(SSEEventMock.limits);
        this.limitsHandler(result);

    };

// Etg ajouter dans le renderer :

    <button value="test" onClick={ this.onTestButtonClick } />


