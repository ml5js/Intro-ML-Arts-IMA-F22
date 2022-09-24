# Applications of Machine Learning models

## Session A: Other pre-trained models

### Objectives:

- Understanding how to use pre-trained models other than image classification.
- Ability to work with PoseNet and ml5.js
- Ability to work with Object Detection Models (CoCoSSD).
- Ability to work with Image Segmentation models (UNet and BodyPix) and ml5.js.
- [Week 3 Slides](https://docs.google.com/presentation/d/1tKp7seEpqoZO6aZzEoK6FXcf_sV8EDVO2HaPU0IqsXA/edit?usp=sharing)

### Models

- [PoseNet](https://ml5js.org/reference/api-PoseNet/)
  - Read [Real-Time Human Pose Estimation in the Browser with TensorFlow.js](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5) by Dan Oved, with editing and illustrations by Irene Alvarado and Alexis Gallo.
- [HandPose](https://learn.ml5js.org/#/reference/handpose)
- [Object Detection](https://learn.ml5js.org/#/reference/object-detector)
- [UNet](https://learn.ml5js.org/#/reference/unet)
  - Trained by [Zaid Alyafeai](https://github.com/zaidalyafeai) using [mut1ny - Face/Head segmentation dataset](http://www.mut1ny.com/face-headsegmentation-dataset)
- [BodyPix](https://learn.ml5js.org/#/reference/bodypix)
  - [Introducing BodyPix: Real-time Person Segmentation in the Browser with TensorFlow.js](https://medium.com/tensorflow/introducing-bodypix-real-time-person-segmentation-in-the-browser-with-tensorflow-js-f1948126c2a0)

### Data and Model Biographies

- [Slides from Ellen Nickles](https://docs.google.com/presentation/d/1Ta8oen66-WgrShq4SdAl_hQ1DZnEWoOdC1wMGlIlswM/edit#slide=id.p)
- [The Future Is Here!](https://thephotographersgallery.org.uk/whats-on/digital-project/mimi-onuoha-future-here), a commission for The Photographers’ Gallery which examines the process of dataset creation by Mimi Ọnụọha
- [Feminist Data Set](https://carolinesinders.com/wp-content/uploads/2020/05/Feminist-Data-Set-Final-Draft-2020-0526.pdf) tool kit to interrogate every step of the AI process by Caroline Sinders
- [Ted Talk: The era of blind faith in big data must end](https://www.youtube.com/watch?v=_2u_eHHzRto) and Cathy O'Neil's [Risk Consulting & Algorithmic Auditing firm](https://orcaarisk.com/)

## Session B

### ml5 video tutorials

- [ml5.js Pose Estimation with PoseNet](https://youtu.be/OIo-DIOkNVg?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y), [code](https://editor.p5js.org/codingtrain/sketches/ULA97pJXR)
- [ml5.js Object Detection](https://youtu.be/QEzRxnuaZCk), [code](https://thecodingtrain.com/learning/ml5/1.3-object-detection.html)

### p5 web editor examples

- [PoseNet Webcam Part Selection](https://editor.p5js.org/ml5/sketches/PoseNet_part_selection)
- [PoseNet Webcam Full Skeleton](https://editor.p5js.org/ml5/sketches/PoseNet_webcam)
- [PoseNet Single Image](https://editor.p5js.org/ima_ml/sketches/Gq9bIvoW1)
- [Object Detection - CoCoSSD](https://editor.p5js.org/ima_ml/sketches/5oQlIcPj2)
- [UNet Image Segmentation](https://editor.p5js.org/ml5/sketches/UNET_webcam)
- [BodyPix Webcam](https://editor.p5js.org/ml5/sketches/BodyPix_Webcam)

## See demos live
[Code](https://github.com/yining1023/machine-learning-for-the-web/tree/master/week3-pose)
- [Posnet](https://yining1023.github.io/machine-learning-for-the-web/week3-pose/PoseNet/)
- [Posnet Multiple Noses](https://yining1023.github.io/machine-learning-for-the-web/week3-pose/Posenet_mutil_noses) (Detect multiple poses, draw nose on each pose)
- [Posenet Nose tail](https://yining1023.github.io/machine-learning-for-the-web/week3-pose/Posenet_Nose_Tail) Save nose previous positions
- [Posenet Vis](https://yining1023.github.io/machine-learning-for-the-web/week3-pose/PoseNet_dance_vis/) Posenet, draw different visualized lines
- [PoseNet Move the Stickman](https://yining1023.github.io/machine-learning-for-the-web/week3-pose/PoseNet_Stickman)
- [PoseNet with KNNClassification](https://yining1023.github.io/machine-learning-for-the-web/week3-pose/PoseNet_KNNClassification)
- [PoseNet with Teachable Machine](https://yining1023.github.io/machine-learning-for-the-web/week3-pose/teachableMachinePoses)
- [PoseNet Video + Music](https://yining1023.github.io/machine-learning-for-the-web/week3-pose/PoseNet_VideoMusic)
- [PoseNet Video + Music + Multiple Squares](https://yining1023.github.io/machine-learning-for-the-web/week3-pose/PoseNet_VideoMusic_multiple/index.html)
- PoseNet in Zoom, [code](https://github.com/yining1023/machine-learning-for-the-web/tree/master/week3-pose/PoseNet_Zoom), [demo](https://www.instagram.com/p/CF8HlJwlLq8/?igshid=1rkol05vsdjxc)
- [BodyPix](https://yining1023.github.io/machine-learning-for-the-web/week3-pose/bodypix/)
- [BodyPix Parts](https://yining1023.github.io/machine-learning-for-the-web/week3-pose/bodypix-parts/)
- [BodyPix Parts Custom Color](https://yining1023.github.io/machine-learning-for-the-web/week3-pose/bodypix-parts-custom/)
- [BodyPix Bubbles](https://yining1023.github.io/machine-learning-for-the-web/week3-pose/bodypix-bubbles/)
- [BodyPix Change Background](https://yining1023.github.io/machine-learning-for-the-web/week3-pose/bodypix-change-background/)
- [UNET_webcam](https://yining1023.github.io/machine-learning-for-the-web/week3-pose/UNET_webcam/)

### Related Projects

- [Maya Man's PoseNet sketchbook](https://mayaontheinter.net/posenetsketchbook/), [Body, Movement, Language: A.I. Sketches with Bill T. Jones](https://mayaontheinter.net/bodymovementlanguage/)
- [PoseNet Whack a Mole](https://vibertthio.com/posenet-whack-a-mole/) by Vibert Thio
- [Sidewalk Orchestra](https://twitter.com/c_valenzuelab/status/979131716907536384) by Cristóbal Valenzuela
- [Pose Music](https://codepen.io/teropa/full/QxLrMp/) by Tero Parviainen
- [The Treachery of Sanctuary](https://www.youtube.com/watch?v=I5__9hq-yas&feature=youtu.be) by Chris Milk
- [Gait Analysis](https://www.runnersneed.com/expert-advice/gear-guides/gait-analysis.html) from runnersneed
- [Moving morrir](https://medium.com/tensorflow/move-mirror-an-ai-experiment-with-pose-estimation-in-the-browser-using-tensorflow-js-2f7b769f9b23?linkId=54484629)
- [Sidewalk Orchestra](https://github.com/cvalenzuela/sidewalk_orchestra)
- [Making music by posing melody shapes to my webcam](https://t.co/RN9qQTDkti)
- [Make music with Posenet from ml4a](https://ml4a.github.io/demos/tfjs/posenet-music.html)
- [PoseNet in ml5.js](https://github.com/ml5js/ml5-examples/tree/master/p5js/PoseNet)
- [Semi-Conductor](https://experiments.withgoogle.com/semi-conductor)
- [Body, Movement, Language: AI Sketches With Bill T. Jones](https://experiments.withgoogle.com/billtjonesai)
- [Touch Type](https://experiments.withgoogle.com/touch-type)
- [nixel-Body](http://cmuems.com/2018/60212f/nixel/10/12/nixel-body/)
- [DeepSquat](https://twitter.com/drewbuttons/status/1184933151170351105)
- [Pose Animator](https://twitter.com/yemount/status/1258776351248494593)
- [Web Olympic](https://vibertthio.com/web-olympic/)
- [AR Body Filter](https://sheeborshee.com/AR-body-filters-2019)
- [ballet rotoscope](https://www.youtube.com/watch?v=yzJk6ww3LD0)
- [Bubbles with posenet](https://sihanzhang.wixsite.com/myspace/machine-learning-for-the-web)

### Assignment 3

2. Read [Mixing movement and machine](https://medium.com/artists-and-machine-intelligence/mixing-movement-and-machine-848095ea5596) by Maya Man
3. Read [Humans of AI](https://humans-of.ai/editorial) by Philipp Schmitt
4. Pick one of the models above (PoseNet, HandPose, UNET, BodyPix, CoCoSSD) and following the examples and [ml5.js documentation](http://learn.ml5js.org/) experiment with controlling elements of a p5.js sketch (color, geometry, sound, text) with the output of the model. (You may also choose a ml5.js model not covered here if you like!)
   - https://editor.p5js.org/yining/sketches/W5MU2Xc02 (nose drawing)
   - https://editor.p5js.org/yining/sketches/NhSshC1cq (pose + cat)
   - https://editor.p5js.org/yining/sketches/jSnEyDrPw (Bodypix color )
   - https://editor.p5js.org/yining/sketches/pVNmUDn-Z (Object detection)
6. Considering the [Model and Data Biography](https://docs.google.com/presentation/d/1Ta8oen66-WgrShq4SdAl_hQ1DZnEWoOdC1wMGlIlswM/edit#slide=id.p) reflect on the the following questions:
   - What questions do you still have about the model and the associated data? Are there elements you would propose including in the biography?
   - How does understanding the provenance of the model and its data inform your creative process?
7. Document your response to the Data and Model biography as well as your p5.js sketch in a blog post and add a link to the post / your p5 sketch on the [Assignment 3 Wiki](https://github.com/ml5js/Intro-ML-Arts-IMA-F22/wiki/Assignment-3). In your blog post, include visual documentation such as a recorded screen capture / video / GIFs of your sketch.
