import React from 'react';

/**
 * Provide epic comic/animation lines to hypes the crowd up!!!
 * @param BoringComponent
 * @return {OtakuComponent}
 */
function injectOtaku (BoringComponent) {
  class OtakuComponent extends React.Component {
    constructor (props) {
      super(props);

      this.lines = [
        '「不能逃避不能逃避不能逃避。」(碇真嗣/EVA)',
        '「安西教練 我想打籃球...」(三井壽/灌籃高手)',
        '「第一手，天元!」(近藤光/棋靈王)',
        '「你已經死了」(拳四郎/北斗之拳)',
        '「讓我來代替月亮懲罰你！」(月野兔/美少女戦士Sailor Moon)',
        '「因為我是個天才啊」(櫻木花道/灌籃高手)',
        '「我本來不想使出這招的」',
        '「我以前和你一樣也是個冒險家，直到我的膝蓋中了一箭」',
        '「這場戰爭結束後，我就要回鄉下種田了」',
        '「作者外出取材，下期休刊」(富奸/JUMP)',
      ];
    }

    render () {
      let randomIndex = Math.floor(Math.random() * 10);
      const randomLine = this.lines[randomIndex];

      return (
        <BoringComponent line={randomLine} {...this.props}/>
      );
    }
  }

  return OtakuComponent;
}

export { injectOtaku };