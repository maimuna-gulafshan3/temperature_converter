function convert()
{
    const tempinput = parseFloat(document.getElementById('temp-input').value);
    const inputtype = document.getElementById('input-type').value;
    let result = '';


    if (inputtype == 'Celsius')
    {
        const fahrenheit = (tempinput * 9/5) +32;
        result = `${tempinput} Celsius is ${fahrenheit} Fahrenheit.`;
    }
    else
    {
        const celsius = (tempinput - 32) * 5/9;
        result = `${tempinput} Fahrenheit is ${celsius} Celsius.`;
    }

    document.getElementById('result').textContent = result;

}

function reset()
{
    document.getElementById('temp-input').value = '';
    document.getElementById('result').textContent = '';

}