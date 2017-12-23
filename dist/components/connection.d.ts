import { ConnectionService } from '../common/service/connectionService';
import { Application } from '../application';
/**
 * Connection component for statistics connection status of frontend servers
 */
export default function (app: any): ConnectionComponent;
export declare class ConnectionComponent {
    app: Application;
    service: ConnectionService;
    name: string;
    constructor(app: any);
}