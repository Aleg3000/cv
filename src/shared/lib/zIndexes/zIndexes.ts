const zIndexes: string[] = [
    'main',
    'dude',
    'flowers',
    'about',
    'works',
    'me',
    'hire-me'
]

//   @function z($name) {
//     @if index($z-indexes, $name) {
//       @return (length($z-indexes) - index($z-indexes, $name)) + 1;
//     } @else {
//       @warn 'There is no item "#{$name}" in this list; Choose one of: #{$z-indexes}';

//       @return null;
//     }
//   }

export function getZIndex (name: string): number {
    if (zIndexes.includes(name)) {
        return zIndexes.indexOf(name) + 1
    } else return null
}
