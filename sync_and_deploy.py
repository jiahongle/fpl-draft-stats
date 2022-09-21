import requests
import json
import os
import shelve

url = 'https://draft.premierleague.com/api/game'
headers = {'user-agent': 'my-app/0.0.1'}
response_json = requests.get(url, headers=headers).json()

is_event_finished = response_json["current_event_finished"]

print("Gameweek Status: ", is_event_finished)

with shelve.open('counter') as db:
    prev_gameweek_num = int(db['gameweek'])
    print("Previous Gameweek: ", prev_gameweek_num)

curr_gameweek_num = int(response_json["current_event"])
print("Current Gameweek: ", curr_gameweek_num)


if is_event_finished and prev_gameweek_num != curr_gameweek_num:
    os.system('./updateAndDeploy.sh')

    with shelve.open('counter') as db:
        db['gameweek'] = curr_gameweek_num

    db.close()
    print("Counter updated and data synced.")
    print("ALL DONE!")

else:
    print("Update not required, all data in-sync.")


