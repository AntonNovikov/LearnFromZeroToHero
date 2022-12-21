from speedtest import Speedtest

st = Speedtest()

print("Download :", st.download())
print("Upload :", st.upload())

st.get_servers([])
print("Ping :".st.result.ping)


# import speedtest
# s = speedtest.Speedtest()
# s.get_best_server()
# s.download()
# s.upload()
# res = s.results.dict()
# print(res["download"], res["upload"], res["ping"])

# import speedtest
# # print(dir(speedtest))
# wifi  = speedtest.Speedtest()
# print("Wifi Download Speed is ", wifi.download())
# print("Wifi Upload Speed is ", wifi.upload())