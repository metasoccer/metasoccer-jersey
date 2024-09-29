export interface DrawSoccerJerseyProps {
    badgeBase64?: string;
    shirtText: string;
    textColor: string;
    textOutlineColor?: string;
    textBackgroundColor?: string;
    shirtColor: string;
    sleeveColor: string;
    shirtStyle:
    | 'plain'
    | 'two-color'
    | 'striped'
    | 'striped-thin'
    | 'striped-thick'
    | 'waves'
    | 'checkered'
    | 'hoops'
    | 'single-band'
    | 'dashed';
    shirtStyleColor?: string;
    shirtStyleDirection?:
    ('diagonal-right'
      | 'diagonal-left'
      | 'horizontal'
      | 'vertical');
    sponsorBase64?: string;
    isBack?: boolean;
  }
