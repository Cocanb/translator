export function translate() {
  const input: HTMLTextAreaElement = document.getElementById(
    'input',
  ) as HTMLTextAreaElement;
  const output = document.getElementById('output');

  output.innerHTML = input.value;
}
