// Ignore this
var window = { heap: {track: (action, props) => {}} };
import { AuditEventReporter } from "./AuditEventReporter";

export class HeapReporter extends AuditEventReporter {
    callHandler(): void {
        window.heap.track(this.event.action, this.getReportableProperties());
    }
}