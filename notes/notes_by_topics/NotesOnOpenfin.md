## Notes on FNX-3601 :  
 Impossible to open several config-panels (report-manager) for different reports at the same time in openFin.

I asked Bing AI to help me with this Bug = when I open two any reports in OpenFin, when I try to open a configuration panel for one of the reports, it works, but two cannot be opened at the same time. The second config panel just wait, as if it took forever to open. In Browser mode, no problem. 
Config is fine. I checked. And it is the same for browser and Openfin. I think the problem is in the way the views are created in the report manager app. I explain : in host.browser.service.ts, we have :

Notes are on Obsidian, so now lets change that into working code !
