import { AuditEventProperties } from "../AuditEventProperties/AuditEventProperties.i";
import { AuditEventReporter } from "../AuditEventReporters/AuditEventReporter";

export abstract class AuditEvent {
    // Event Name: (Object + Action)
    abstract name: string;
    
    // Event Action
    abstract action: string;
    
    // Property object
    abstract properties: AuditEventProperties;
   
    // List of reporters that should handle this event
    protected abstract reportsTo: AuditEventReporter[];
    
    fire() {
        this.reportsTo.forEach((reporter: AuditEventReporter) => {
            reporter.report();
        })
    }
}