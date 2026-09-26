method                   | web | electron | tauri | capacitor
-------------------------------------------------------------
ReadFileByBrowserApi     | v   | v        | v     | v        
WriteFileByBrowserApi    | a   | v        | a     | e/?p     
-------------------------------------------------------------
ReadFileByBrowser        | v   | v        | v     | v        
WriteFileByBrowser       | v   | v        | -/?p  | -/?p     
-------------------------------------------------------------
ReadFileByFetchTarget ./ | v   | v        | v     | v        
ReadFileByFetchTarget /  | -   | -        | -     | -        
ReadFileByFetchTarget c: | -   | -        | -     | -        
-------------------------------------------------------------
ReadFileByNodeTarget     | e   | e        | e     | e        
WriteFileByNodeTarget    | e   | e        | e     | e        

legend:
a - ask for allow permission
e - error and not works
p - permission need
v - ok
- - not worked
/ - or
? - may be
