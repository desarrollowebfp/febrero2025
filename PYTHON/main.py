import PySimpleGUI as sg

# All the stuff inside your window.
layout = [  [sg.Text("What's your name?")],
            [sg.InputText()],
            [sg.Button('Ok'), sg.Button('Cancel')] ]

# Create the Window
window = sg.Window('Hello Example', layout)

# Event Loop to process "events" and get the "values" of the inputs
while True:
    event, values = window.read()

    # if user closes window or clicks cancel
    if event == sg.WIN_CLOSED or event == 'Cancel':
        break

    print('Hello', values[0], '!')

window.close()
