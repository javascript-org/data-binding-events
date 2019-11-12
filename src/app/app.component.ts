import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-events';
  textValue = this.title;
  isActive=false;
  emaill="me@gmail.com";
  onKeyUpEnterProperty()
  {
    console.log(this.emaill);
  }
   onClick($e)
  {
    console.log("button clicked", $e);
  }
  onClickEventBubbling($e)
  {
    $e.stopPropagation();// add this to stop event bubbling to div
    console.log("button clicked");
  }
  onDivClick()
  {
    console.log("div clicked");
  }
  onKeyUp($e)
  {
    if($e.keyCode===13)
    {
      console.log("enter key pressed");
    }
  }
  onKeyUpEnter($event)
  {
    console.log("enter was pressed");
    console.log($event.target.value);
  }

  onKeyUpEnterTemplate(email)
  {
    console.log(email);
  }
}
